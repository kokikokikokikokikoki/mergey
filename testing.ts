// For implementing function with this interface
//     merge (int[] collection_1, int[] collection_2) : int []

// given
//      collection_1, collection_2 already sorted from min(0) to max

//assume that the numbers in the collection are already sorted for us
//based on the question, use merge, but dont use sort at all cost.


export function merging(collection_1: number[], collection_2: number[]): number[] {
    let merge: number[] = []
    let i = 0
    let j = 0
    //get into normal loop by default
    while (i < collection_1.length && j < collection_2.length) {
        if (collection_1[i] < collection_2[j]) {
            merge.push(collection_1[i])
            i++
        } else {
            merge.push(collection_2[j])
            j++
        }
    }
    if (i < collection_1.length) {
        merge = merge.concat(collection_1.slice(i))
    } else {
        merge = merge.concat(collection_2.slice(j))
    }
    return merge
}

