package main

import (
	"context"
	"fmt"
	"io/ioutil"
	"log"
	"os"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

func handler(ctx context.Context, request events.APIGatewayProxyRequest) (*events.APIGatewayProxyResponse, error) {
	// Read `cupcakes.json` file
	content, err := ioutil.ReadFile(os.Getenv("URL") + "/cupcakes.json")
	if err != nil {
		log.Fatal("Error when opening file: ", err)
	}
	fmt.Println(string(content))

	/* // Unmarshall the data into `payload`
	var payload []Data
	err = json.Unmarshal(content, &payload)
	if err != nil {
		log.Fatal("Error during Unmarshal(): ", err)
	}

	fmt.Println(payload) */

	return &events.APIGatewayProxyResponse{
		StatusCode:      200,
		Headers:         map[string]string{"Content-Type": "application/json", "Access-Control-Allow-Origin": os.Getenv("URL")},
		Body:            string(content),
		IsBase64Encoded: false,
	}, nil
}

func main() {
	lambda.Start(handler)
}
