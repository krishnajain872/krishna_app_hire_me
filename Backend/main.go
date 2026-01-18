package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/krishnajain/portfolio-backend/handlers"
)

func main() {
	mux := http.NewServeMux()

	// Public Routes
	mux.HandleFunc("/api/public/portfolio", handlers.GetPortfolio)
	mux.HandleFunc("/api/public/services", handlers.GetServices)
	mux.HandleFunc("/api/public/contact", handlers.SubmitContact)

	// Admin Routes
	mux.HandleFunc("/api/admin/stats", handlers.GetDashboardStats)
	mux.HandleFunc("/api/admin/tasks", handlers.GetKanbanTasks)
	mux.HandleFunc("/api/admin/quotes", handlers.GetQuotes)

	// Client Routes
	mux.HandleFunc("/api/client/progress", handlers.GetClientProgress)
	mux.HandleFunc("/api/client/invoices", handlers.GetInvoices)

	// Wrap with CORS middleware
	handler := corsMiddleware(mux)

	port := ":8080"
	fmt.Printf("Server starting on port %s...\n", port)
	if err := http.ListenAndServe(port, handler); err != nil {
		log.Fatalf("Server failed to start: %v", err)
	}
}

func corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Allow all origins for prototype
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		next.ServeHTTP(w, r)
	})
}
