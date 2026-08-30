CREATE TABLE IF NOT EXISTS visits (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  visited_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  ip_hash TEXT NOT NULL,
  ip_prefix TEXT NOT NULL,
  full_ip TEXT,
  country TEXT,
  region TEXT,
  city TEXT,
  path TEXT NOT NULL,
  referrer TEXT,
  user_agent TEXT,
  language TEXT,
  screen TEXT
);

CREATE INDEX IF NOT EXISTS idx_visits_visited_at ON visits(visited_at DESC);
CREATE INDEX IF NOT EXISTS idx_visits_ip_hash ON visits(ip_hash);
