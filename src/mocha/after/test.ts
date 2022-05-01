describe('describe-text', function(){
    it('it-1-text', function () {
        after((): void => {
            console.log('1 last --- after each');
        })
        console.log('1 first');
        console.log('1 second');
    })

    it('it-2-text', function () {
        after((): void => {
            console.log('2 last --- after each');
        })
        console.log('2 first');
        console.log('2 second');
    })
    /*
    OUTPUT:

1 first
1 second
2 first
2 second
1 last --- after each
2 last --- after each

    COMMENT:
'last' is executed only once
     */
})
