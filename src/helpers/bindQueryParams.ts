const bindQueryParams = (
    url: string,
    params: { [key: string]: string | number | undefined | boolean }
) => {
    const query = Object.keys(params)
        .filter((k) => params[k] !== undefined)
        .map((k) => {
            const value = params[k];

            if (value === undefined) return;

            return encodeURIComponent(k) + "=" + encodeURIComponent(value);
        })
        .join("&");
    return url + "?" + query;
};

export default bindQueryParams;
