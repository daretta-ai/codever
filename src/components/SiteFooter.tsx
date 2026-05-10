export function SiteFooter() {
  return (
    <footer
      className="block site-footer-band"
      style={{ paddingTop: 0, paddingBottom: 0 }}
      data-screen-label="Home / Footer"
    >
      <div className="container">
        <div className="sitefooter">
          <div className="top">
            <div className="brand-block">
              <span className="lf">
                <span className="br">&lt;</span>
                <span className="word">CODEVER</span>
                <span className="br">&gt;</span>
              </span>
              <p>
                Technical partner for complex systems. Control, clarity,
                reliability, long-term evolution.
              </p>
              <span className="badge live">
                <span className="dot"></span>Accepting selected briefs
              </span>
            </div>
            <div className="col">
              <h5>Sitemap</h5>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Systems</a></li>
                <li><a href="#">Approach</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Structure</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="col">
              <h5>Group</h5>
              <ul>
                <li><a href="#">Mirror</a></li>
                <li><a href="#">Architecture</a></li>
                <li><a href="#">Design</a></li>
                <li><a href="#">Strategy</a></li>
              </ul>
            </div>
            <div className="col">
              <h5>Contact</h5>
              <ul>
                <li>
                  <a href="mailto:hello@codever.it">hello@codever.it</a>
                </li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Press kit</a></li>
              </ul>
            </div>
          </div>
          <div className="bottom">
            <span>© 2026 Codever — part of Mirror group</span>
            <div className="right">
              <span>Privacy</span>
              <span>Cookie</span>
              <span>v0.2</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
