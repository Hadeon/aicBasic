// All this data will be acquired by the API and broken down into individual items for the respective dropdowns/fields

// Every time the app is booted up, we will probably need to make an API call to make sure that all the locations/employees have been updated

export const db = {
    "Employees": [
        ["42", "Black", "Jack"],
        ["152", "Jackson", "Samuel"],
        ["500", "Stone", "Emma"],
        ["15", "Hemsworth", "Chris"],
        ["80", "Johannson", "Scarlett"]
    ]
}

export const employees = [{
        value: 'Black, Jack',
        id: '42'
    },
    {
        value: 'Jackson, Samuel L.',
        id: '152'
    },
    {
        value: 'Stone, Emma',
        id: '500'
    },
    {
        value: 'Hemsworth, Chris',
        id: '15'
    },
    {
        value: 'Johannson, Scarlett',
        id: '80'
    }];

export const locations = [{
        value: 'Seattle Warehouse - 422',
        id: '422'
    },
    {
        value: 'San Diego Office - 1992',
        id: '1992'
    },
    {
        value: 'Toronto Plant - 12E',
        id: '12E'
    },
    {
        value: 'Austin Facility - S81',
        id: 'S81'
    }
]

export const severityLevel = [{
        value: 'I'
    },
    {
        value: 'II'
    },
    {
        value: 'III'
    },
    {
        value:'IV'
    },
    {
        value: 'V'
    }
]
