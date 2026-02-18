# Self-Healing Kubernetes Web App

A containerized Node.js web application deployed on Kubernetes that demonstrates self-healing features such as automatic pod restart, replication, and crash recovery.

## 🚀 Features
- Kubernetes Deployment & Service
- Liveness Probe (Self-Healing)
- Dockerized Application
- Crash simulation

## 🛠 Tech Stack
- Node.js
- Docker
- Kubernetes (Minikube)

## ⚙️ How to Run
```bash
minikube start
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
minikube service healing-service
