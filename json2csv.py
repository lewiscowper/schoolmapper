import json
import csv

with open("zoopla.js") as file:
    data = json.load(file)

with open("zoopla.csv", "w") as file:
    csv_file = csv.writer(file)
    for item in data['listing']:
        csv_file.writerow([item['longitude'], item['latitude'], item['displayable_address'], item['listing_status'],
        item['price']
        ])
        #csv_file.writerow([item['longitude'], item['latitude']] + item['fields'].values())
