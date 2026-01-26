package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/krishnajain/portfolio-backend/models"
)

func GetPortfolio(w http.ResponseWriter, r *http.Request) {
	projects := []models.Project{
		{
			ID:          "1",
			Title:       "Secure FinTech Solution",
			Category:    "FinTech",
			Description: "High-frequency trading platform with real-time data encryption.",
			Tags:        []string{"Node.js", "Blockchain", "Socket.io"},
			ImageURL:    "https://lh3.googleusercontent.com/aida-public/AB6AXuA2fsM13Jf1IYzCxVJjzROe_2grcNWNVdes1ET2sTUECxsuuxIy5M67z5mBlCOGvGKTeRkYLHIVPicwJsIrEsN_YxQaH6HpMzxL5RvN6QHRwotcrFbWBm8CjYJOyIJqGKjnJFPGRfOzsHjFdmW8LzcSr1s3Tj-nd5x_ARPygb9aStyAPZSoyrXuy2knWwprx2oEfI_X7U3abwpz9I5B4lMaRp9RFapmdhBxoESkTKworELcWEMEty8LXR70T_P8TI0ytNywDsSGQM6Q",
			CaseStudy:   true,
		},
		{
			ID:          "2",
			Title:       "Zomato Clone",
			Category:    "Full-Stack",
			Description: "Full-featured food delivery app with live geolocation.",
			Tags:        []string{"React Native", "Firebase", "Stripe"},
			ImageURL:    "https://lh3.googleusercontent.com/aida-public/AB6AXuAH2qA2-YGRsyT-hKVKe1DQrKleMYzo79KKA_uZgJ7PlsTHzBeXy1ilUOhlhe1uxeHskkgezMfbK0yUyn5ZiVpJLW99lCYHWY-sQSloaEM3VxhTKmD2_fCWp7_8T9xMt18-ph0bebTPzSHu7hqNnFd9Fhz64ng6BcLGGnIWa4keMYxcjH4pn_wku0THhjHVfXWXK4A_bQnGNkDl8UQkzPTPb0df3fvzh2EdDzKLulOOsZp8egjIjFcHO5KPg2AkukPVWb0QKXtFLKpG",
			CaseStudy:   true,
		},
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(projects)
}

func GetServices(w http.ResponseWriter, r *http.Request) {
	services := []models.Service{
		{
			ID:          "1",
			Title:       "Mobile Apps",
			Description: "Native and cross-platform mobile applications tailored for iOS and Android.",
			Icon:        "smartphone",
			TechStack:   []string{"React Native", "Swift", "Flutter"},
		},
		{
			ID:          "2",
			Title:       "Web Development",
			Description: "Responsive, high-performance websites and web apps built for scale.",
			Icon:        "language",
			TechStack:   []string{"Next.js", "React", "Node.js"},
		},
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(services)
}

func SubmitContact(w http.ResponseWriter, r *http.Request) {
	var msg models.ContactMessage
	if err := json.NewDecoder(r.Body).Decode(&msg); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

    // In a real app, you would save this to a DB or send an email
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]string{"status": "received", "message": "Thanks for contacting " + msg.Name})
}
