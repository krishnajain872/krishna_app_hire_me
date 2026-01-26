package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/krishnajain/portfolio-backend/models"
)

func GetClientProgress(w http.ResponseWriter, r *http.Request) {
	// In a real app, you'd filter by client ID from the context/auth
	projects := []models.ClientProject{
		{ID: "1", Name: "E-commerce App", Status: "In Progress", Progress: 65},
		{ID: "2", Name: "Portfolio CMS", Status: "Review", Progress: 92},
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(projects)
}

func GetInvoices(w http.ResponseWriter, r *http.Request) {
	invoices := []models.Invoice{
		{ID: "INV-1024", Title: "Design Phase 1", Amount: "$4,500.00", Status: "Paid", Date: "Oct 12"},
		{ID: "INV-1025", Title: "Milestone 2: MVP", Amount: "$2,100.00", Status: "Pending", Date: "Nov 01"},
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(invoices)
}
