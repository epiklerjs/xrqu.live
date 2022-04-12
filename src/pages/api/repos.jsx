let key1 = 'ghp_ZoiPGkJIqWwxA'; 

export default async (req, res) => {
    let _ = await (await fetch('https://api.github.com/users/epiklerjs/repos', {
        headers: {}
    })).json();
    
    try {
        res.send([..._])
    } catch {
        res.status(500);
    }
}
