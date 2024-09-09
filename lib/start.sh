#!/bin/bash

GREEN='\033[0;32m'
NC='\033[0m' # No Color

while true
do
  echo -e "${GREEN}Starting Black Helios bot!${NC}"
  
  node .

  echo -e "${GREEN}Black Helios bot stopped. Restarting...${NC}"

  sleep 5
done
