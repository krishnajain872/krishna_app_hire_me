package models

type Project struct {
	ID          string   `json:"id"`
	Title       string   `json:"title"`
	Category    string   `json:"category"`
	Description string   `json:"description"`
	Tags        []string `json:"tags"`
	ImageURL    string   `json:"imageUrl"`
	CaseStudy   bool     `json:"caseStudy"`
}

type Service struct {
	ID          string   `json:"id"`
	Title       string   `json:"title"`
	Description string   `json:"description"`
	Icon        string   `json:"icon"`
	TechStack   []string `json:"techStack"`
}

type ContactMessage struct {
	Name    string `json:"name"`
	Email   string `json:"email"`
	Message string `json:"message"`
}

type DashboardStat struct {
	Label string `json:"label"`
	Value string `json:"value"`
	Trend string `json:"trend"` // e.g., "+12%"
}

type KanbanTask struct {
	ID       string `json:"id"`
	Title    string `json:"title"`
	Project  string `json:"project"`
	Priority string `json:"priority"` // High, Medium, Low
	Status   string `json:"status"`   // To Do, In Progress, Done
	Assignee string `json:"assignee"`
}

type QuoteRequest struct {
	ID          string `json:"id"`
	ProjectName string `json:"projectName"`
	ClientName  string `json:"clientName"`
	Description string `json:"description"`
	Status      string `json:"status"` // New, Sent, Approved
	Amount      string `json:"amount,omitempty"`
}

type ClientProject struct {
	ID       string `json:"id"`
	Name     string `json:"name"`
	Status   string `json:"status"`
	Progress int    `json:"progress"` // 0-100
}

type Invoice struct {
	ID     string `json:"id"`
	Title  string `json:"title"`
	Amount string `json:"amount"`
	Status string `json:"status"` // Paid, Pending
	Date   string `json:"date"`
}
