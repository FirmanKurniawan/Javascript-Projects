package routes

import (
	"context"
	"log"

	firebase "firebase.google.com/go"
	"google.golang.org/api/option"
)

// Use the application default credentials

func getCloudConnection() {
	ctx := context.Background()
	conf := &firebase.Config{ProjectID: "react-go-firebase-4589d"}
	app, err := firebase.NewApp(ctx, conf)
	if err != nil {
		log.Fatalln(err)
	}

	client, err := app.Firestore(ctx)
	if err != nil {
		log.Fatalln(err)
	}
	defer client.Close()
}

func InitializeApp() {
	// Use a service account
	ctx := context.Background()
	sa := option.WithCredentialsFile("../adminsdk.json")
	app, err := firebase.NewApp(ctx, nil, sa)
	if err != nil {
		log.Fatalln(err)
	}

	client, err := app.Firestore(ctx)
	if err != nil {
		log.Fatalln(err)
	}
	defer client.Close()
}
