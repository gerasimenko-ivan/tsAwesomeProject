describe('describe-text', function(){
    it('it-1-text', function () {
        afterEach((): void => {
            console.log('1 last --- after each');
        })
        console.log('1 first');
        console.log('1 second');
    })

    it('it-2-text', function () {
        afterEach((): void => {
            console.log('2 last --- after each');
        })
        console.log('2 first');
        console.log('2 second');
    })
    /*
    OUTPUT:

1 first
1 second
1 last --- after each
2 first
2 second
1 last --- after each
2 last --- after each

    COMMENT:
'1 last' is executed twice
     */
})
