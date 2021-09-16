Purpose: Get Product information.
API URL: https://learn-2.galvanize.com/cohorts/2910/blocks/94/content_files/Front%20End%20Capstone/project-atelier-catwalk/products.md

API EndPoints:
1.) List Products [Method: GET Request ]:
    a.) API End Point: https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products
    b.) Purpose: Retrieves the list of products
    c.) Parameters:
    Parameter	| Type	  | Description
    page	    | integer	| Selects the page of results to return. Default 1.
    count	    | integer | Specifies how many results per page to return. Default 5.

      - Page API Endpoint: https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/?page=[Page Number]
        Example: https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/?page=2'

      - Count API Endpoint: https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/?count=[Product Count]
        Example: https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/?count=10
    d.) Sample Data:
    [
      {
        "id": 1,
        "name": "Camo Onesie",
        "slogan": "Blend in to your crowd",
        "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
        "category": "Jackets",
        "default_price": "140"
        }
    ]

2.) Product Information [Method: GET Request ]:
    a.) API End Point: https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/:product_id
    b.) Purpose: Returns all product level information for a specified product id
    c.) Parameters:
    Parameter	 | Type	    | Description
    product_id | integer	| Required ID of the Product requested
    d.) Sample Data:
    {
      "id": 11,
      "name": "Air Minis 250",
      "slogan": "Full court support",
      "description": "This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.",
      "category": "Basketball Shoes",
      "default_price": "0",
      "features": [
                    {
                            "feature": "Sole",
                            "value": "Rubber"
                        },
                    {
                            "feature": "Material",
                            "value": "FullControlSkin"
                        },
                    // ...
                  ],
    }

3.) Product Styles [Method: GET Request ]:
    a.) API End Point: https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/:product_id/styles
    b.) Purpose: Returns the all styles available for the given product.
    c.) Parameters:
    Parameter	 | Type	    | Description
    product_id | integer	| Required ID of the Product requested
    d.) Sample Data:
    {
    "product_id": "1",
    "results": [
  	{
            "style_id": 1,
            "name": "Forest Green & Black",
            "original_price": "140",
            "sale_price": "0",
            "default?": true,
            "photos": [
  			{
                    "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
                    "url": "urlplaceholder/style_1_photo_number.jpg"
                },
  			{
                    "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
                    "url": "urlplaceholder/style_1_photo_number.jpg"
                }
  			// ...
            ],
        "skus": {
                	"37": {
                    		"quantity": 8,
                    		"size": "XS"
                	},
                	"38": {
                    		"quantity": 16,
                    		"size": "S"
                	},
                	"39": {
                    		"quantity": 17,
                    		"size": "M"
                	},
            //...
            	}
    }

4.) Related Product [Method: GET Request ]:
    a.) API End Point: https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/:product_id/related
    b.) Purpose: Returns the id's of products related to the product specified.
    c.) Parameters:
    Parameter	 | Type	    | Description
    product_id | integer	| Required ID of the Product requested
    d.) Sample Data:
    [
      2,
      3,
      8,
      7
    ],