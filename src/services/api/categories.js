const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

export const getAllCategories = async () => {
    const res = await fetch("http://localhost:8000/api/categories", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    // console.log(res);
    const categories = await res.json();
    // console.log(categories);
    return categories;
};