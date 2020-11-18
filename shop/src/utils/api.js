const api = {
    fetchItems: async () => {
        const res = await
            fetch('http://localhost:3000/more', {
                method: 'GET'
            });
        await console.log(res);
        return await res;
    },
}

export { api };
