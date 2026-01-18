package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/krishnajain/portfolio-backend/models"
)

func GetDashboardStats(w http.ResponseWriter, r *http.Request) {
	stats := []models.DashboardStat{
		{Label: "Site Visits", Value: "124", Trend: "+12%"},
		{Label: "Pending Inquiries", Value: "3", Trend: ""},
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(stats)
}

func GetKanbanTasks(w http.ResponseWriter, r *http.Request) {
	tasks := []models.KanbanTask{
		{ID: "1", Title: "Homepage UI Redesign", Project: "Nexus Web", Priority: "High", Status: "To Do", Assignee: "KJ"},
		{ID: "2", Title: "API Integration", Project: "Skyline App", Priority: "Medium", Status: "In Progress", Assignee: "AS"},
		{ID: "3", Title: "Setup Repo", Project: "Internal", Priority: "Low", Status: "Done", Assignee: "KJ"},
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(tasks)
}

func GetQuotes(w http.ResponseWriter, r *http.Request) {
	quotes := []models.QuoteRequest{
		{ID: "1", ProjectName: "AI Chatbot", ClientName: "Sarah Miller", Status: "New", Description: "GPT-4 powered chatbot"},
		{ID: "2", ProjectName: "Biometric Auth", ClientName: "Marc Chen", Status: "Sent", Amount: "$1,200"},
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(quotes)
}
