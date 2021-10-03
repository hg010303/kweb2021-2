const factorial = n =>{
    let ret = 1;
    for (let i = n; i>=1;i--){
        ret = ret*i;
    }

    return ret;
}

const permutation = (n,r)=>{
    let ret = factorial(n);
    ret = ret/factorial(n-r);

    return ret;
}

const combination = (n,r)=>{
    let ret = factorial(n);
    ret = ret/factorial(r);
    ret = ret/factorial(n-r);

    return ret;
}

const multiPermutation = (n,r)=>{
    let ret = 1;
    for(let i=0;i<r;i++){
        ret = ret*n;
    }
    
    return ret;
}

const multiCombination = (n,r)=>{
    return combination(n+r-1,r);
}

module.exports = {
    permutation,
    combination,
    multiCombination,
    multiPermutation,
};