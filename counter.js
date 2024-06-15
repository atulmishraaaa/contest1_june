document.addEventListener('DOMContentLoaded', function(){
    const countDisplay = document.getElementById('countDisplay');
    const plusBtn = document.getElementById('plus');
    const minusBtn = document.getElementById('minus');
    const clearBtn = document.getElementById('clear');
    const errorMsg = document.getElementById('error');

    let count = 0;

    function updateCount(){
        countDisplay.textContent = `Your Current Count is : ${count}`;
        // if(count===0){
        //     clearBtn.style.display='none';
        // }
        // else{
        //     clearBtn.style.display='block';
        // }
        if(count!==0){
            errorMsg.style.display='none';
        }
    }

    updateCount();

    plusBtn.addEventListener('click', function(){
        count++;
        updateCount();    
    });

    minusBtn.addEventListener('click', function(){
        if(count>0){
            count--;
            updateCount();
        }
        else{
        errorMsg.style.display="block";
        }
    });

    clearBtn.addEventListener('click', function(){
        count=0;
        errorMsg.style.display='none';

        updateCount();
    });
});