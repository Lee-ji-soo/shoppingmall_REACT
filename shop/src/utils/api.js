const api = {
    fetchItems: async () => {
        const res = await
            fetch('../data/more.json');
        await console.log(res);
        return await res.json();
    },
}

export { api };
