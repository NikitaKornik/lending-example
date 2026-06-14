import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { FadeIn } from "../../components/ui/animations/Reveal/Reveal";
import { projectCategories, projects } from "../../data/projects";
import s from "./Projects.module.scss";

const ITEMS_PER_PAGE = 6;
const ALL = "All";

type FilterKey = "category" | "design" | "palette";

const filterLabels: Record<FilterKey, string> = {
  category: "Room type",
  design: "Design style",
  palette: "Color palette",
};

function getOptions(key: FilterKey) {
  if (key === "category") return [ALL, ...projectCategories];

  return [ALL, ...Array.from(new Set(projects.map((project) => project[key]))).sort()];
}

export default function Projects() {
  const [filters, setFilters] = useState<Record<FilterKey, string>>({
    category: ALL,
    design: ALL,
    palette: ALL,
  });
  const [page, setPage] = useState(1);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      return (Object.keys(filters) as FilterKey[]).every((key) => {
        return filters[key] === ALL || project[key] === filters[key];
      });
    });
  }, [filters]);

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / ITEMS_PER_PAGE));
  const paginatedProjects = filteredProjects.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  function setFilter(key: FilterKey, value: string) {
    setFilters((current) => ({ ...current, [key]: value }));
    setPage(1);
  }

  function resetFilters() {
    setFilters({
      category: ALL,
      design: ALL,
      palette: ALL,
    });
    setPage(1);
  }

  return (
    <main className={s.root}>
      <FadeIn>
        <section className={s.hero}>
          <span className={s.eyebrow}>Project archive</span>
          <h1>Explore interiors by room, style, and palette.</h1>
          <p>
            Browse a larger sample of interior concepts. Filters are local for
            now, but the structure is ready to be replaced with server data.
          </p>
        </section>
      </FadeIn>

      <FadeIn delay={0.08}>
        <div className={s.archiveLayout}>
          <aside className={s.filters}>
            <div className={s.filtersHeader}>
              <span className={s.eyebrow}>Filters</span>
              <h2>Refine the archive</h2>
            </div>
            {(Object.keys(filterLabels) as FilterKey[]).map((key) => (
              <label className={s.filterGroup} key={key}>
                <span className={s.filterTitle}>{filterLabels[key]}</span>
                <select
                  onChange={(event) => setFilter(key, event.target.value)}
                  value={filters[key]}
                >
                  {getOptions(key).map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            ))}
            <button onClick={resetFilters} type="button">
              Reset filters
            </button>
          </aside>

          <div className={s.results}>
            <section className={s.toolbar}>
              <div>
                <strong>{filteredProjects.length}</strong>
                <span> projects found</span>
              </div>
              <span>
                Page {page} of {totalPages}
              </span>
            </section>

            {paginatedProjects.length > 0 ? (
              <section className={s.grid}>
                {paginatedProjects.map((project) => (
                  <Link
                    className={s.card}
                    key={project.slug}
                    to={`/projects/${project.slug}`}
                  >
                    <img
                      src={project.img}
                      alt={`${project.title} interior design project`}
                      loading="lazy"
                    />
                    <div className={s.cardBody}>
                      <div className={s.cardMeta}>
                        <span>{project.category}</span>
                        <span>{project.design}</span>
                        <span>{project.palette}</span>
                      </div>
                      <h2>{project.title}</h2>
                      <p>{project.description}</p>
                    </div>
                  </Link>
                ))}
              </section>
            ) : (
              <section className={s.empty}>
                <h2>No projects match these filters.</h2>
                <p>Try removing one filter or reset the archive.</p>
                <button onClick={resetFilters} type="button">
                  Reset filters
                </button>
              </section>
            )}

            <nav className={s.pagination} aria-label="Projects pagination">
              <button
                disabled={page === 1}
                onClick={() => setPage((current) => Math.max(1, current - 1))}
                type="button"
              >
                Previous
              </button>
              <div>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                  (pageNumber) => (
                    <button
                      className={page === pageNumber ? s.currentPage : undefined}
                      key={pageNumber}
                      onClick={() => setPage(pageNumber)}
                      type="button"
                    >
                      {pageNumber}
                    </button>
                  )
                )}
              </div>
              <button
                disabled={page === totalPages}
                onClick={() =>
                  setPage((current) => Math.min(totalPages, current + 1))
                }
                type="button"
              >
                Next
              </button>
            </nav>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
