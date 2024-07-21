# backend/Dockerfile

# Use the official Python 3.10 image
FROM python:3.10

# Set the working directory
WORKDIR /app

# Copy the requirements file
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application code
COPY . .

# Expose the port that the app runs on
EXPOSE 8000

# Command to run the application
CMD ["uvicorn", "faucet_backend_cache_address:app", "--host", "0.0.0.0", "--port", "8000"]
