#!/bin/bash

mongoimport --db toy --collection cameras --drop --file camera-dataset.json
