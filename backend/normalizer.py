import pandas as pd
import json

def load_and_normalize_data():
    # Load data from different sources
    vet_clinic_data = pd.read_csv("vet_clinic.csv")
    adoption_program_data = pd.read_csv("adoption_program.csv")
    eshop_data = pd.read_csv("eshop.csv")

    # Normalize column names
    vet_clinic_data.columns = vet_clinic_data.columns.str.lower().str.replace(' ', '_')
    adoption_program_data.columns = adoption_program_data.columns.str.lower().str.replace(' ', '_')
    eshop_data.columns = eshop_data.columns.str.lower().str.replace(' ', '_')

    # Convert data types to string for uniformity
    vet_clinic_data = vet_clinic_data.astype(str)
    adoption_program_data = adoption_program_data.astype(str)
    eshop_data = eshop_data.astype(str)

    # Define a common schema
    vet_clinic_data = vet_clinic_data.rename(columns={
        'name': 'full_name',
        'location': 'city',
        'pet_status': 'status_of_pet'
    })
    adoption_program_data = adoption_program_data.rename(columns={
        'name': 'full_name',
        'location': 'city'
    })
    eshop_data = eshop_data.rename(columns={
        'purchase': 'purchase_history'
    })

    # Merge datasets
    merged_data = pd.merge(vet_clinic_data, adoption_program_data, on='email', how='outer')
    merged_data = pd.merge(merged_data, eshop_data, on='email', how='outer')

    # Fill missing values with default values
    merged_data = merged_data.fillna('N/A')

    # Convert to a list of dictionaries (JSON)
    normalized_data = merged_data.to_dict(orient='records')

    return normalized_data

def save_to_json(data, filename='normalized_user_data.json'):
    with open(filename, 'w') as f:
        json.dump(data, f, indent=4)

# Run the normalization process
normalized_data = load_and_normalize_data()
save_to_json(normalized_data)

# Display the normalized JSON data
print(json.dumps(normalized_data, indent=4))