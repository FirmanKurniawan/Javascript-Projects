package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"

	"context"
	"log"

	firebase "firebase.google.com/go"
	"google.golang.org/api/iterator"
	"google.golang.org/api/option"
)

var ctx context.Context
var app *firebase.App
var err error

func Initialize() {
	// Use a service account
	ctx = context.Background()
	sa := option.WithCredentialsFile("../adminsdk.json")
	app, err = firebase.NewApp(ctx, nil, sa)
	if err != nil {
		log.Fatalln(err)
	}
}

// func getQuote() {
// 	q := map[string]string{
// 		"quote":  "The best way to predict the future is to invent it.",
// 		"author": "Alan Kay",
// 	}
// 	return q
// }

func StatusOK(c *gin.Context) {
	c.JSON(200, gin.H{
		"status": "ok",
	})
}

type City struct {
	Name       string `json:"name" binding:"required"`
	State      string `json:"state" binding:"required"`
	Country    string `json:"country" binding:"required"`
	Capital    bool   `json:"capital,omitempty"`
	Population int    `json:"population,omitempty"`
}

type Quote struct {
	Quote  string `json:"quote" binding:"required"`
	Author string `json:"author" binding:"required"`
	ID     int    `json:"id" binding:"required"`
}

type ResQuote struct {
	Quote  string `json:"quote" binding:"required"`
	Author string `json:"author" binding:"required"`
	ID     int    `json:"id" binding:"required"`
	Doc_ID string `json:"doc_id" binding:"required"`
}

func CreateQuote(c *gin.Context) {

	client, err := app.Firestore(ctx)
	if err != nil {
		log.Fatalln(err)
	}

	quotes := []struct {
		Quote  string `json:"quote" binding:"required"`
		Author string `json:"author" binding:"required"`
		ID     int    `json:"id" binding:"required"`
	}{
		{
			Quote:  "The best way to predict the future is to invent it.",
			Author: "Alan Kay",
			ID:     1,
		},
		{
			Quote:  "The future is already here — it's just not very evenly distributed.",
			Author: "William Gibson",
			ID:     2,
		},
		{
			Quote:  "Science is what we understand well enough to explain to a computer. Art is everything else we do.",
			Author: "Donald Knuth",
			ID:     3,
		},
		{
			Quote:  "The most exciting phrase to hear in science, the one that heralds new discoveries, is not 'Eureka!' but 'That's funny ...'",
			Author: "Isaac Asimov",
			ID:     4,
		},
	}

	for _, q := range quotes {
		_, _, err = client.Collection("quotes").Add(ctx, map[string]interface{}{
			"quote":  q.Quote,
			"author": q.Author,
			"id":     q.ID,
		})
		if err != nil {
			log.Fatalf("Failed adding alovelace: %v", err)
		}
	}

	// result, err := client.Collection("sampleData").Doc("inspiration").Set(ctx, map[string]string{
	// 	"quote":  "The best way to predict the future is to invent it.",
	// 	"author": "Alan Kay",
	// })
	if err != nil {
		log.Fatalln(err)
	}

	// cities := []struct {
	// 	id string
	// 	c  City
	// }{
	// 	{id: "SF", c: City{Name: "San Francisco", State: "CA", Country: "USA", Capital: false, Population: 860000}},
	// 	{id: "LA", c: City{Name: "Los Angeles", State: "CA", Country: "USA", Capital: false, Population: 3900000}},
	// 	{id: "DC", c: City{Name: "Washington D.C.", Country: "USA", Capital: true, Population: 680000}},
	// 	{id: "TOK", c: City{Name: "Tokyo", Country: "Japan", Capital: true, Population: 9000000}},
	// 	{id: "BJ", c: City{Name: "Beijing", Country: "China", Capital: true, Population: 21500000}},
	// }

	// m := make(map[string]City)
	// for _, city := range cities {
	// 	m[city.id] = city.c
	// 	result, err := client.Collection("cities").Doc(city.id).Set(ctx, city.c)
	// 	if err != nil {
	// 		log.Fatalln(err)
	// 	}
	// 	log.Print(result)
	// }

	defer client.Close()

	// c.JSON http status code 200 and result as json object
	c.JSON(200, gin.H{
		"body": "Successfully added quotes",
	})
}

func GetQuotes(c *gin.Context) {

	client, err := app.Firestore(ctx)
	if err != nil {
		log.Fatalln(err)
	}

	// dsnap, err := client.Collection("sampleData").Doc("inspiration").Get(ctx)
	// if err != nil {
	// 	log.Fatalln(err)
	// }

	// m := dsnap.Data()
	// log.Print("***********Data from dsnap", m)

	// // ************
	// dsnap2, err := client.Collection("cities").Doc("BJ").Get(ctx)
	// if err != nil {
	// 	log.Fatalln(err)

	// }

	// var ci City
	// dsnap2.DataTo(&ci)
	// fmt.Printf("Document data: %#v\n", ci)

	// **********
	// fmt.Println("All cities:")

	var x []map[string]interface{}
	iter := client.Collection("quotes").Documents(ctx)
	for {
		doc, err := iter.Next()
		if err == iterator.Done {
			break
		}

		if err != nil {
			return
		}
		// fmt.Println(doc.Data())
		// fmt.Println("ÏD : ", doc.Ref.ID)

		// Add doc.Ref.ID to the map
		m := doc.Data()
		m["doc_id"] = doc.Ref.ID
		x = append(x, m)
	}

	defer client.Close()

	c.IndentedJSON(http.StatusOK, x)

}

func AddQuote(c *gin.Context) {
	var newQuote Quote

	// Call BindJSON to bind the received JSON to newQuote.
	if err := c.BindJSON(&newQuote); err != nil {
		return
	}

	client, err := app.Firestore(ctx)
	if err != nil {
		log.Fatalln(err)
	}

	var q map[string]string
	c.BindJSON(&q)

	_, _, err = client.Collection("quotes").Add(ctx, map[string]interface{}{

		"quote":  newQuote.Quote,
		"author": newQuote.Author,
		"id":     newQuote.ID,
	})
	if err != nil {
		log.Fatalf("Failed adding alovelace: %v", err)
	}

	defer client.Close()

	c.JSON(200, gin.H{
		"body": "Successfully added quote",
	})
}

func GetQuoteById(c *gin.Context) {

}

func UpdateQuote(c *gin.Context) {
	var updateQuote ResQuote

	// Call BindJSON to bind the received JSON to updateQuote.
	if err := c.BindJSON(&updateQuote); err != nil {
		return
	}

	client, err := app.Firestore(ctx)
	if err != nil {
		log.Fatalln(err)
	}

	var q map[string]string
	c.BindJSON(&q)

	_, err = client.Collection("quotes").Doc(updateQuote.Doc_ID).Set(ctx, map[string]interface{}{
		"quote":  updateQuote.Quote,
		"author": updateQuote.Author,
		"id":     updateQuote.ID,
	})
	if err != nil {
		log.Fatalf("Failed adding alovelace: %v", err)
	}

	defer client.Close()

	c.JSON(200, gin.H{
		"body": "Successfully updated quote",
	})

}

func DeleteQuote(c *gin.Context) {
	id := c.Param("id")

	client, err := app.Firestore(ctx)
	if err != nil {
		log.Fatalln(err)
	}

	_, err = client.Collection("quotes").Doc(id).Delete(ctx)
	if err != nil {
		log.Fatalln(err)
	}

	defer client.Close()

	c.JSON(200, gin.H{
		"body": "Successfully deleted quote",
	})

}
