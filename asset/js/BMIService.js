var BMIService = {
    getIndex: function (weight, height) {
        if(typeof(weight) === 'number' && typeof(height) === 'number'){
            return weight / (height * height);
        }
        return null;
    },
    
    getDescription: function (index) {
        
        if (index < 17){
            var tr = document.querySelector('.above17');
            tr.removeClass;
            tr.className = 'resultDescription';
        }
        else if ((index >=17) && (index <=18.49)){
            var tr = document.querySelector('.between17_18');
            tr.removeClass;
            tr.className = 'resultDescription';
        }
        else if ((index >=18.5) && (index <=24.99)){
            var tr = document.querySelector('.between18_24');
            tr.removeClass;
            tr.className = 'resultDescription';
        }
        else if ((index >=25) && (index <=29.99)){
            var tr = document.querySelector('.between25_29');
            tr.removeClass;
            tr.className = 'resultDescription';
        }
        else if ((index >=30) && (index <=34.99)){
            var tr = document.querySelector('.between30_34');
            tr.removeClass;
            tr.className = 'resultDescription';
        }
        else if ((index >=35) && (index <=39.99)){
            var tr = document.querySelector('.between35_39');
            tr.removeClass;
            tr.className = 'resultDescription';
        }
        else if (index >= 40){
            var tr = document.querySelector('.above40');
            tr.removeClass;
            tr.className = 'resultDescription';
        }
    }

};