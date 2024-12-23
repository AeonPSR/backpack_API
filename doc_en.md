# Backpack API Documentation

## Base URL
`https://localhost:8000/api`

## Authentication
None.

## Endpoints

### Bags

#### List all bags
- **URL**: `/bags`
- **Method**: `GET`
- **Response**: Array of bag objects
```json
[
    {
        "id": 1,
        "Name": "Hiking Backpack",
        "Size": 40,
        "Price": 89.99,
        "Available": true,
        "reviews": [
            {
                "id": 1,
                "Author": "John Doe",
                "Comment": "Great hiking backpack, very sturdy",
                "Stars": 5,
                "Date": "2024-03-23"
            }
        ]
    }
]
```

#### Get a specific bag
- **URL**: `/bags/{id}`
- **Method**: `GET`
- **URL Parameters**: `id=[integer]` required
- **Response**: Single bag object
```json
{
    "id": 1,
    "Name": "Hiking Backpack",
    "Size": 40,
    "Price": 89.99,
    "Available": true,
    "reviews": [...]
}
```

#### Create a new bag
- **URL**: `/bags`
- **Method**: `POST`
- **Data Params**:
```json
{
    "Name": "Bag Name",
    "Size": 40,
    "Price": 89.99,
    "Available": true
}
```
- **Success Response**: Created bag object

#### Update a bag
- **URL**: `/bags/{id}`
- **Method**: `PUT`
- **URL Parameters**: `id=[integer]` required
- **Data Params**: Same as create
- **Success Response**: Updated bag object

#### Delete a bag
- **URL**: `/bags/{id}`
- **Method**: `DELETE`
- **URL Parameters**: `id=[integer]` required
- **Success Response**: No content (204)

### Reviews

#### List all reviews for a bag
- **URL**: `/bags/{bagId}/reviews`
- **Method**: `GET`
- **URL Parameters**: `bagId=[integer]` required
- **Response**: Array of review objects
```json
[
    {
        "id": 1,
        "Author": "John Doe",
        "Comment": "Great hiking backpack, very sturdy",
        "Stars": 5,
        "Date": "2024-03-23"
    }
]
```

#### Create a new review
- **URL**: `/bags/{bagId}/reviews`
- **Method**: `POST`
- **URL Parameters**: `bagId=[integer]` required
- **Data Params**:
```json
{
    "Author": "John Doe",
    "Comment": "Review text here",
    "Stars": 5,
    "Date": "2024-03-23"
}
```
- **Success Response**: Created review object

#### Update a review
- **URL**: `/reviews/{id}`
- **Method**: `PUT`
- **URL Parameters**: `id=[integer]` required
- **Data Params**: Same as create
- **Success Response**: Updated review object

#### Delete a review
- **URL**: `/reviews/{id}`
- **Method**: `DELETE`
- **URL Parameters**: `id=[integer]` required
- **Success Response**: No content (204)

## Error Responses

### General Error Response Format
```json
{
    "error": "Error message here"
}
```

### Common Error Codes
- `400 Bad Request`: Invalid input data
- `404 Not Found`: Resource not found
- `500 Internal Server Error`: Server error

## Testing the API

You can test the API using curl commands. Remember to use the `--insecure` flag since we're using a self-signed certificate in development:

```bash
# List all bags
curl -X GET https://localhost:8000/api/bags --insecure

# Create a bag
curl -X POST https://localhost:8000/api/bags \
-H "Content-Type: application/json" \
-d '{
    "Name": "Test Bag",
    "Size": 20,
    "Price": 29.99,
    "Available": true
}' \
--insecure

# Create a review
curl -X POST https://localhost:8000/api/bags/1/reviews \
-H "Content-Type: application/json" \
-d '{
    "Author": "John Doe",
    "Comment": "Great bag!",
    "Stars": 5,
    "Date": "2024-03-23"
}' \
--insecure
```