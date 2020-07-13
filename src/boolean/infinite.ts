
export default function Infinite (number : number) : boolean {

    switch (number) {
        case Number.POSITIVE_INFINITY :
        case Number.NEGATIVE_INFINITY :
            return true;
    }

    return false;

}

