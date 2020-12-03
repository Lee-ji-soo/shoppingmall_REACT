const REQ_URL = 'https://www.juso.go.kr/addrlink/addrLinkApi.do';
const JUSO_CONFIRM_KEY = "devU01TX0FVVEgyMDIwMTIwMzIyMzkzMjExMDUwMDg=";

const api = {
    fetchItems: async () => {
        const res = await
            fetch('../data/more.json');
        return await res.json();
    },
    fetchJuso: async ({ page, keyword2 }) => {
        const res = await
            fetch(`${REQ_URL}?confmKey=${JUSO_CONFIRM_KEY}&currentPage=${page}&countPerPage=10&resultType=json&keyword=${keyword2}`);
        return await res.json();
    }
}

export { api };
