package main

import (
	"os"

	"github.com/SanjeebLama/golang_workspace/tree/react-go-app/routes"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	routes.Initialize()

	router := gin.Default()
	router.Use(gin.Logger())   // logger
	router.Use(cors.Default()) // cors

	router.GET("/status", routes.StatusOK)
	router.POST("/quote/create", routes.CreateQuote)

	router.POST("/quote/add", routes.AddQuote)

	router.GET("/quotes", routes.GetQuotes)
	router.GET("quote/:id", routes.GetQuoteById)

	// Update
	router.PUT("/quote/update", routes.UpdateQuote)

	// delete
	router.DELETE("/quote/:id", routes.DeleteQuote)

	router.Run(":" + port)
}
