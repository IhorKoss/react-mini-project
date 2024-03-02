import {FC, PropsWithChildren} from "react";
import {IMovie} from "../../interfaces";
import {StarsRating} from "../StarsRating/StarsRating";
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {
    movie:IMovie
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    const {id,original_title,poster_path,vote_average}=movie;
    const poster_href=`https://image.tmdb.org/t/p/w500${poster_path}`
    const navigate = useNavigate()
    return (
        <div>
            <div onClick={()=>navigate(`/movies/${id.toString()}`)}><img src={poster_href} alt=""/></div>
            <div>{original_title}</div>
            <div>{vote_average}</div>
            <StarsRating vote_average={vote_average}/>
        </div>
    );
};

export {MoviesListCard};