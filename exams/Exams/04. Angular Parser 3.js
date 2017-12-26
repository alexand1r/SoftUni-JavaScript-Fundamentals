function angularParserSecond(arr) {
    let storage = new Map();
    let appPattern = /^\$app='([^'|"]+)'/;
    let controllerPattern = /^\$controller='([^'|"]+)'&app='([^'|"]+)'/;
    let modelPattern = /^\$model='([^'|"]+)'&app='([^'|"]+)'/;
    let viewPattern = /^\$view='([^'|"]+)'&app='([^'|"]+)'/;
    let helper = new Set();
    let controllers = 'controllers';
    let models = 'models';
    let views = 'views';
    for (let row of arr){
        let appMatcher = appPattern.exec(row);
        let controllerMatcher = controllerPattern.exec(row);
        let modelMatcher = modelPattern.exec(row);
        let viewMatcher = viewPattern.exec(row);
        if (appMatcher){
            helper.add(appMatcher[1]);
            if (!storage.has(appMatcher[1])) {
                storage.set(appMatcher[1], new Map());
                storage.get(appMatcher[1]).set(controllers, []);
                storage.get(appMatcher[1]).set(models, []);
                storage.get(appMatcher[1]).set(views, []);
            }
        } else if (controllerMatcher){
            let app = controllerMatcher[2];
            if (storage.has(app)){
                storage.get(app).get(controllers).push(controllerMatcher[1])
            } else if (!storage.has(app)) {
                storage.set(app, new Map());
                storage.get(app).set(controllers, []);
                storage.get(app).set(models, []);
                storage.get(app).set(views, []);
                storage.get(app).get(controllers).push(controllerMatcher[1]);
            }
        } else if (modelMatcher){
            let app = modelMatcher[2];
            if (storage.has(app)){
                storage.get(app).get(models).push(modelMatcher[1]);
            } else {
                storage.set(app, new Map());
                storage.get(app).set(controllers, []);
                storage.get(app).set(models, []);
                storage.get(app).set(views, []);
                storage.get(app).get(models).push(modelMatcher[1]);
            }
        } else if (viewMatcher){
            let app = viewMatcher[2];
            if (storage.has(app)){
                storage.get(app).get(views).push(viewMatcher[1]);
            } else {
                storage.set(app, new Map());
                storage.get(app).set(controllers, []);
                storage.get(app).set(models, []);
                storage.get(app).set(views, []);
                storage.get(app).get(views).push(viewMatcher[1]);
            }
        }
    }

    for (let key of storage.keys()){
        if (!helper.has(key)){
            storage.delete(key);
        }
    }

    let sortedStorage = [...storage.entries()].sort((a,b) => {
        let result = b[1].get(controllers).length - a[1].get(controllers).length;
        if (result == 0){
            return a[1].get(models).length - b[1].get(models).length;
        }
        return result;
    });
    let object = {};

    for (let [key, value] of sortedStorage){
        object[key] = {};
        for (let [k, v] of value){
            object[key][k] = [];
            for (let element of v.sort()){
                object[key][k].push(element);
            }
        }
    }

    console.log(JSON.stringify(object))
}