export function stateFrom<T>(source: () => T) {
    let data = $state(source());

    $effect(() => {
        data = source();
    });

    return {
        get data() {
            return data;
        },
    };
}
