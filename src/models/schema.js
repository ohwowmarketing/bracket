export const schema = {
    "models": {
        "Result": {
            "name": "Result",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "superBowl": {
                    "name": "superBowl",
                    "isArray": false,
                    "type": {
                        "enum": "Team"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "tieBreaker": {
                    "name": "tieBreaker",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "afcConference": {
                    "name": "afcConference",
                    "isArray": false,
                    "type": {
                        "enum": "Team"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "nfcConference": {
                    "name": "nfcConference",
                    "isArray": false,
                    "type": {
                        "enum": "Team"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "afcDivisional1": {
                    "name": "afcDivisional1",
                    "isArray": false,
                    "type": {
                        "enum": "Team"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "afcDivisional2": {
                    "name": "afcDivisional2",
                    "isArray": false,
                    "type": {
                        "enum": "Team"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "nfcDivisional1": {
                    "name": "nfcDivisional1",
                    "isArray": false,
                    "type": {
                        "enum": "Team"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "nfcDivisional2": {
                    "name": "nfcDivisional2",
                    "isArray": false,
                    "type": {
                        "enum": "Team"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "afcWildCard1": {
                    "name": "afcWildCard1",
                    "isArray": false,
                    "type": {
                        "enum": "Team"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "afcWildCard2": {
                    "name": "afcWildCard2",
                    "isArray": false,
                    "type": {
                        "enum": "Team"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "afcWildCard3": {
                    "name": "afcWildCard3",
                    "isArray": false,
                    "type": {
                        "enum": "Team"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "nfcWildCard1": {
                    "name": "nfcWildCard1",
                    "isArray": false,
                    "type": {
                        "enum": "Team"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "nfcWildCard2": {
                    "name": "nfcWildCard2",
                    "isArray": false,
                    "type": {
                        "enum": "Team"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "nfcWildCard3": {
                    "name": "nfcWildCard3",
                    "isArray": false,
                    "type": {
                        "enum": "Team"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Results",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "Admin"
                                ],
                                "operations": [
                                    "read",
                                    "create",
                                    "delete",
                                    "update"
                                ]
                            },
                            {
                                "allow": "private",
                                "operations": [
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Entry": {
            "name": "Entry",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "username": {
                    "name": "username",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "superBowl": {
                    "name": "superBowl",
                    "isArray": false,
                    "type": {
                        "enum": "Team"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "tieBreaker": {
                    "name": "tieBreaker",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "afcConference": {
                    "name": "afcConference",
                    "isArray": false,
                    "type": {
                        "enum": "Team"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "nfcConference": {
                    "name": "nfcConference",
                    "isArray": false,
                    "type": {
                        "enum": "Team"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "afcDivisional1": {
                    "name": "afcDivisional1",
                    "isArray": false,
                    "type": {
                        "enum": "Team"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "afcDivisional2": {
                    "name": "afcDivisional2",
                    "isArray": false,
                    "type": {
                        "enum": "Team"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "nfcDivisional1": {
                    "name": "nfcDivisional1",
                    "isArray": false,
                    "type": {
                        "enum": "Team"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "nfcDivisional2": {
                    "name": "nfcDivisional2",
                    "isArray": false,
                    "type": {
                        "enum": "Team"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "afcWildCard1": {
                    "name": "afcWildCard1",
                    "isArray": false,
                    "type": {
                        "enum": "Team"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "afcWildCard2": {
                    "name": "afcWildCard2",
                    "isArray": false,
                    "type": {
                        "enum": "Team"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "afcWildCard3": {
                    "name": "afcWildCard3",
                    "isArray": false,
                    "type": {
                        "enum": "Team"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "nfcWildCard1": {
                    "name": "nfcWildCard1",
                    "isArray": false,
                    "type": {
                        "enum": "Team"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "nfcWildCard2": {
                    "name": "nfcWildCard2",
                    "isArray": false,
                    "type": {
                        "enum": "Team"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "nfcWildCard3": {
                    "name": "nfcWildCard3",
                    "isArray": false,
                    "type": {
                        "enum": "Team"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Entries",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "operations": [
                                    "read",
                                    "create",
                                    "update",
                                    "delete"
                                ],
                                "identityClaim": "cognito:username"
                            },
                            {
                                "allow": "private",
                                "operations": [
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "Team": {
            "name": "Team",
            "values": [
                "ARI",
                "ATL",
                "BAL",
                "BUF",
                "CAR",
                "CHI",
                "CIN",
                "CLE",
                "DAL",
                "DEN",
                "DET",
                "GB",
                "HOU",
                "IND",
                "JAX",
                "KC",
                "LAC",
                "LAR",
                "LV",
                "MIA",
                "MIN",
                "NE",
                "NO",
                "NYG",
                "NYJ",
                "PHI",
                "PIT",
                "SEA",
                "SF",
                "TB",
                "TEN",
                "WAS"
            ]
        }
    },
    "nonModels": {},
    "version": "17e18e6ad15cb2ab7b87b75a4d46752b"
};