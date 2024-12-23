# Documentation API Sacs à Dos

## URL de Base
`https://localhost:8000/api`

## Authentification
Aucune.

## Points d'Entrée

### Sacs à Dos

#### Liste de tous les sacs
- **URL**: `/bags`
- **Méthode**: `GET`
- **Réponse**: Tableau d'objets sac
```json
[
    {
        "id": 1,
        "Name": "Sac de Randonnée",
        "Size": 40,
        "Price": 89.99,
        "Available": true,
        "reviews": [
            {
                "id": 1,
                "Author": "Jean Dupont",
                "Comment": "Excellent sac de randonnée, très robuste",
                "Stars": 5,
                "Date": "2024-03-23"
            }
        ]
    }
]
```

#### Obtenir un sac spécifique
- **URL**: `/bags/{id}`
- **Méthode**: `GET`
- **Paramètres URL**: `id=[entier]` requis
- **Réponse**: Un objet sac
```json
{
    "id": 1,
    "Name": "Sac de Randonnée",
    "Size": 40,
    "Price": 89.99,
    "Available": true,
    "reviews": [...]
}
```

#### Créer un nouveau sac
- **URL**: `/bags`
- **Méthode**: `POST`
- **Paramètres de données**:
```json
{
    "Name": "Nom du Sac",
    "Size": 40,
    "Price": 89.99,
    "Available": true
}
```
- **Réponse de succès**: Objet sac créé

#### Mettre à jour un sac
- **URL**: `/bags/{id}`
- **Méthode**: `PUT`
- **Paramètres URL**: `id=[entier]` requis
- **Paramètres de données**: Identiques à la création
- **Réponse de succès**: Objet sac mis à jour

#### Supprimer un sac
- **URL**: `/bags/{id}`
- **Méthode**: `DELETE`
- **Paramètres URL**: `id=[entier]` requis
- **Réponse de succès**: Pas de contenu (204)

### Avis

#### Liste de tous les avis pour un sac
- **URL**: `/bags/{bagId}/reviews`
- **Méthode**: `GET`
- **Paramètres URL**: `bagId=[entier]` requis
- **Réponse**: Tableau d'objets avis
```json
[
    {
        "id": 1,
        "Author": "Jean Dupont",
        "Comment": "Excellent sac de randonnée, très robuste",
        "Stars": 5,
        "Date": "2024-03-23"
    }
]
```

#### Créer un nouvel avis
- **URL**: `/bags/{bagId}/reviews`
- **Méthode**: `POST`
- **Paramètres URL**: `bagId=[entier]` requis
- **Paramètres de données**:
```json
{
    "Author": "Jean Dupont",
    "Comment": "Texte de l'avis ici",
    "Stars": 5,
    "Date": "2024-03-23"
}
```
- **Réponse de succès**: Objet avis créé

#### Mettre à jour un avis
- **URL**: `/reviews/{id}`
- **Méthode**: `PUT`
- **Paramètres URL**: `id=[entier]` requis
- **Paramètres de données**: Identiques à la création
- **Réponse de succès**: Objet avis mis à jour

#### Supprimer un avis
- **URL**: `/reviews/{id}`
- **Méthode**: `DELETE`
- **Paramètres URL**: `id=[entier]` requis
- **Réponse de succès**: Pas de contenu (204)

## Réponses d'Erreur

### Format Général des Réponses d'Erreur
```json
{
    "error": "Message d'erreur ici"
}
```

### Codes d'Erreur Communs
- `400 Bad Request`: Données d'entrée invalides
- `404 Not Found`: Ressource non trouvée
- `500 Internal Server Error`: Erreur serveur

## Tester l'API

Vous pouvez tester l'API en utilisant les commandes curl. N'oubliez pas d'utiliser le drapeau `--insecure` car nous utilisons un certificat auto-signé en développement :

```bash
# Lister tous les sacs
curl -X GET https://localhost:8000/api/bags --insecure

# Créer un sac
curl -X POST https://localhost:8000/api/bags \
-H "Content-Type: application/json" \
-d '{
    "Name": "Sac Test",
    "Size": 20,
    "Price": 29.99,
    "Available": true
}' \
--insecure

# Créer un avis
curl -X POST https://localhost:8000/api/bags/1/reviews \
-H "Content-Type: application/json" \
-d '{
    "Author": "Jean Dupont",
    "Comment": "Excellent sac !",
    "Stars": 5,
    "Date": "2024-03-23"
}' \
--insecure
```