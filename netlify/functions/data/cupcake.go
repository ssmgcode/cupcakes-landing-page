package main

type Cupcake struct {
	ID          string `json:"id"`
	Flavor      string `json:"flavor"`
	Color       string `json:"color"`
	Description string `json:"description"`
	Price       int64  `json:"price"`
	PicturePath string `json:"picturePath"`
}
