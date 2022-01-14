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
	content, err := ioutil.ReadFile(os.Getenv("URL") + "/services.json")
	if err != nil {
		log.Fatal("Error when opening file: ", err)
	}

	fmt.Println(string(content))

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
