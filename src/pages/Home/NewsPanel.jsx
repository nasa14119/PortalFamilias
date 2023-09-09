export function NewsPanel(){
  return (
    <div className="OnlyCompHome" style={{ boxShadow: window.localStorage.getItem("theme")&& "none" }}>
          <h3>Noticias</h3>
          <div className="OnlyCompHome_news_conteiner">
            <div className="news_conteiner">
              <div>
                <img src="https://picsum.photos/250/150?random=3" alt="img_noticia" />
              </div>
              <div>
                <h4>Noticia 1</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Obcaecati animi doloribus quo optio, incidunt ipsa, neque
                  magnam quod esse aliquam amet? Delectus officiis ipsum placeat
                  obcaecati id ut nulla quisquam excepturi optio minus, illum
                  dolores quis explicabo commodi illo cumque nihil beatae.
                </p>
              </div>
            </div>
            <div className="news_conteiner">
              <div>
                <img
                  src="https://picsum.photos/250/150?random=2"
                  alt="img_noticia"
                />
              </div>
              <div>
                <h4>Noticia 2</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Obcaecati animi doloribus quo optio, incidunt ipsa, neque
                  magnam quod esse aliquam amet? Delectus officiis ipsum placeat
                  obcaecati id ut nulla quisquam excepturi optio minus, illum
                  dolores quis explicabo commodi illo cumque nihil beatae.
                </p>
              </div>
            </div>
            <div className="news_conteiner">
              <div>
                <img
                  src="https://picsum.photos/250/150"
                  alt="img_noticia"
                />
              </div>
              <div>
                <h4>Noticia 3</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Obcaecati animi doloribus quo optio, incidunt ipsa, neque
                  magnam quod esse aliquam amet? Delectus officiis ipsum placeat
                  obcaecati id ut nulla quisquam excepturi optio minus, illum
                  dolores quis explicabo commodi illo cumque nihil beatae.
                </p>
              </div>
            </div>
            <div className="news_conteiner">
              <div>
                <img
                  src="https://picsum.photos/250/150?random=1"
                  alt="img_noticia"
                />
              </div>
              <div>
                <h4>Noticia 4</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Obcaecati animi doloribus quo optio, incidunt ipsa, neque
                  magnam quod esse aliquam amet? Delectus officiis ipsum placeat
                  obcaecati id ut nulla quisquam excepturi optio minus, illum
                  dolores quis explicabo commodi illo cumque nihil beatae.
                </p>
              </div>
            </div>
          </div>
        </div>
  )
}