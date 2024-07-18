/*
Hash tables
    Dictionnary in python, Object in Js, Maps in Java
    key value pair
    hash function (optimum): 
        - input => hash(input)
        - same input same result
        - this is idempotent
    used in cache system

    context:
        we give a key that we hash using the hash function
        and a data to store
        when we add, remove, read we should always give the key

    insert O(1) - lookup O(1) - delete O(1) - search O(1)

    cons: when we have a collision(data inserted randomly can make collision) 
    the performance can be O(n) when lookup

    Map and Set are hash tables DS in typescript/javascript
*/
