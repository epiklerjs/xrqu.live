export default async(req, res) => { 
    const techs = [
        {
            "name": "HTML",
            "src": "/static/techs/html.svg"
        },
        {
            "name": "CSS",
            "src": "/static/techs/css.svg"
        },
        {
            "name": "Javascript",
            "src": "/static/techs/javascript.svg"
        },
        {
            "name": "Next.js",
            "src": "/static/techs/nextjs.svg"
        },
    ]
    res.status(200).json(techs)
}
