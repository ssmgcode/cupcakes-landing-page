// This file was generated from JSON Schema using quicktype, do not modify it directly.
// To parse and unparse this JSON data, add this code to your project and do:
//
//    data, err := UnmarshalData(bytes)
//    bytes, err = data.Marshal()

package main

import "encoding/json"

func UnmarshalData(data []byte) (Data, error) {
	var r Data
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Data) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Data struct {
	Cupcakes []Cupcake `json:"cupcakes"`
	Services []Service `json:"services"`
}
