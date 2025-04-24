import { Link } from "react-router-dom";
import { getViewIdeaRoute } from "../../lib/routes";
import { trpc } from "../../lib/trpc";
import css from "./index.module.scss";
import { Segment } from "../../components/Segment";

export const AllIdeasPage = () => {
  const { data } = trpc.getIdeas.useQuery();

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Segment title="All ideas">
      <div className={css.ideas}>
        {data.ideas.map((idea) => (
          <div className={css.idea} key={idea.nick}>
            <Segment
              size={2}
              title={
                <Link
                  className={css.ideaLink}
                  to={getViewIdeaRoute({ ideaNick: idea.nick })}
                >
                  {idea.name}
                </Link>
              }
              description={idea.description}
            />
          </div>
        ))}
      </div>
    </Segment>
  );
};
