package main

import (
	"bytes"
	"context"
	"encoding/json"
	"log"
	"net/http"
	"os"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

func handler(ctx context.Context, request events.APIGatewayProxyRequest) (*events.APIGatewayProxyResponse, error) {
	// url := os.Getenv("URL") + "/data.json"
	url := "https://dreamy-shannon-6bac5d.netlify.app/data.json"
	response, err := http.Get(url)
	if err != nil {
		log.Fatal("Cannot fetch data: ", err)
	}
	defer response.Body.Close()

	if response.StatusCode != http.StatusOK {
		log.Fatal("Unexpected http GET status: ", response.Status)
	}

	var jsonFileData interface{} // Will store json file data
	err = json.NewDecoder(response.Body).Decode(&jsonFileData)
	if err != nil {
		log.Fatal("Error when decoding response body: ", err)
	}

	// Need to convert `jsonFileData` to []byte to Unmarshal the data
	var buffer bytes.Buffer
	encoder := json.NewEncoder(&buffer)
	err = encoder.Encode(jsonFileData)
	if err != nil {
		log.Fatal("Error when getting []byte: ", err)
	}
	jsonFileDataInBytes := buffer.Bytes()

	data, err := UnmarshalData(jsonFileDataInBytes)
	if err != nil {
		log.Fatal("Error decoding data: ", err)
	}

	var dataToSendInBytes []byte
	switch request.QueryStringParameters["requiredData"] {
	case "cupcakes":
		dataToSendInBytes, err = json.Marshal(data.Cupcakes)
		if err != nil {
			log.Fatal("Error encoding cupcakes: ", err)
		}
	case "services":
		dataToSendInBytes, err = json.Marshal(data.Services)
		if err != nil {
			log.Fatal("Error encoding services: ", err)
		}
	}

	dataToSend := string(dataToSendInBytes)

	return &events.APIGatewayProxyResponse{
		StatusCode: 200,
		Headers:    map[string]string{"Content-Type": "application/json", "Access-Control-Allow-Origin": os.Getenv("URL")},
		Body:       dataToSend,

		IsBase64Encoded: false,
	}, nil
}

func main() {
	lambda.Start(handler)
}
