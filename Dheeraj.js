const arrayData =
    [
        {
            "var_type": "env",
            "key": "deploy_env",
            "value": "static",
            "environment_scope": "textify",
            "protected": false
        },
        {
            "var_type": "env",
            "key": "status_type",
            "value": "dynamic",
            "environment_scope": "textify",
            "protected": false
        },
        {
            "var_type": "env",
            "key": "deploy_env",
            "value": "static",
            "environment_scope": "botify",
            "protected": false
        },
        {
            "var_type": "env",
            "key": "deploy_env",
            "value": "static",
            "environment_scope": "botify",
            "protected": false
        },
        {
            "var_type": "env",
            "key": "status_type",
            "value": "dynamic",
            "environment_scope": "smartify",
            "protected": false
        },
        {
            "var_type": "env",
            "key": "deploy_env",
            "value": "static",
            "environment_scope": "botify",
            "protected": false
        },
        {
            "var_type": "env",
            "key": "deploy_env",
            "value": "static",
            "environment_scope": "botify",
            "protected": false
        },
        {
            "var_type": "env",
            "key": "status_type",
            "value": "dynamic",
            "environment_scope": "smartify",
            "protected": false
        },
        {
            "var_type": "env",
            "key": "abcd",
            "value": "random",
            "environment_scope": "botify",
            "protected": false
        }
    ];

const scopes = arrayData.map(x => {
    return x.environment_scope
});

const uniqueScopes = new Set(scopes)

for(let value of uniqueScopes) {
    console.log(output(arrayData, value))
}

function output(arrayData, scope) {
    let finalObject = {};
    let obj = {};

    arrayData.forEach(element => {
        if (element.environment_scope === scope) {
            obj[element.key] = element.value
            finalObject[element.environment_scope] = obj;
        }
    });

    return finalObject;
}

