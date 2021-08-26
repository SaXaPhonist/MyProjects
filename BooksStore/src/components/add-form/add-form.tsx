import React, { FormEvent, useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionAddNew } from "../../actions/actions";
import "./add-form.css";

interface IaddFrom {
  onClose: () => void;
}

interface IEvent<T = EventTarget> {
  target: T;
}

interface IErrors {
  [key: string]: unknown;
}

const AddForm = (props: IaddFrom): JSX.Element => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState(0);
  const [cover, setCover] = useState("не указано");
  const [neu, setTypeNew] = useState(true);
  const [used, setTypeUsed] = useState(false);
  const [sell, setSell] = useState(true);
  const [cross, setCross] = useState(false);
  const [image, setImage] = useState("");
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<IErrors>({});
  const dispatch = useDispatch();

  useEffect(() => {
    validate();
  }, [title, author, year, price, image, agree]);

  const validate = () => {
    setErrors({});
    if (!agree) {
      setErrors((state) => ({ ...state, agree: agree }));
    }
    if (title.length === 0) {
      setErrors((state) => ({
        ...state,
        title: "error",
      }));
    }
    if (
      author.match(new RegExp("[a-zA-Zа-яА-Я]")) === null ||
      author.length === 0
    ) {
      setErrors((state) => ({
        ...state,
        author: "error",
      }));
    }
    if (
      Number(year.split("-").slice(0, 1).join()) >
        Number(new Date().getFullYear()) ||
      year.length === 0
    ) {
      setErrors((state) => ({
        ...state,
        year: "error",
      }));
    }
    if (price <= 0) {
      setErrors((state) => ({
        ...state,
        price: "error",
      }));
    }
  };

  const loadFile = (event: IEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(event.target.files[0]);
      fileReader.onloadend = () => {
        const preview: HTMLElement | null =
          document.getElementById("image-preview");
        if (fileReader.result) {
          const imgSrc = fileReader.result.toString();
          preview?.setAttribute("src", imgSrc);
          localStorage.setItem(`${author}-${title}`, imgSrc);
          setImage(imgSrc);
        }
      };
    }
  };

  const handelSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      dispatch(
        actionAddNew({
          _id: title + author + year,
          title: title,
          author: author,
          year: year.split("-").slice(0, 1).join(),
          price: price,
          cover: cover,
          neu: neu,
          used: used,
          sell: sell,
          cross: cross,
          image: image,
        })
      );
    }
    props.onClose();
  };

  return (
    <form
      action="sumbit"
      className="add-form popup"
      onSubmit={(e) => handelSubmit(e)}
      onClick={(e) => e.stopPropagation()}
    >
      <span className="form__header">Add your Book</span>
      <label htmlFor="title" className="label__title">
        Book title
      </label>
      <input
        type="text"
        className={
          errors.title === "error" ? "input-title error" : "input-title valid"
        }
        name="title"
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      {errors.title === "error" ? "* title shouldn't be empty" : null}

      <label htmlFor="author">Author</label>
      <input
        type="text"
        className={
          errors.author === "error"
            ? "input-author error"
            : "input-author valid"
        }
        value={author}
        name="author"
        placeholder="Author"
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      {errors.author === "error" ? "* author should be text only" : null}
      <label htmlFor="Year">Year</label>
      <input
        type="date"
        className={
          errors.year === "error" ? "input-date error" : "input-date valid"
        }
        name="year"
        value={year}
        placeholder="Year"
        onChange={(e) => setYear(e.target.value)}
      />
      {errors.year === "error" ? (
        <p className="incorrect-input">* incorrect date</p>
      ) : null}
      <label htmlFor="price">Price</label>
      <input
        className={
          errors.price === "error" ? "input-price error" : "input-price valid"
        }
        type="number"
        name="price"
        placeholder="Inner price"
        onChange={(e) => setPrice(Number(e.target.value))}
        required
      />
      <label htmlFor="book-cover">Обложка</label>
      <select
        className="select-cover"
        name="cover"
        value={cover}
        onChange={(e) => setCover(e.target.value)}
      >
        <option>твердый переплет</option>
        <option>мягкая обложка</option>
        <option>не указано</option>
      </select>

      <div className="toggle__container">
        <label className="label-title">Choose book type</label>
        <label htmlFor="new" className="label-radio">
          New
          <input
            className="new-type input-radio"
            checked
            type="radio"
            name="type"
            id="new"
            onChange={() => setTypeNew((prev) => !prev)}
          />
          <span className="checkmark"></span>
        </label>
        <label htmlFor="used" className="label-radio">
          Used
          <input
            className="used-type input-radio"
            type="radio"
            name="type"
            id="used"
            onChange={() => setTypeUsed((prev) => !prev)}
          />
          <span className="checkmark"></span>
        </label>
      </div>
      <div className="toggle__container">
        <label>
          <p>Choose what you want to do</p>
        </label>
        <label htmlFor="sell" className="label-radio">
          To sell
          <input
            className="new-type input-radio"
            checked
            type="radio"
            name="propouse"
            id="sell"
            onChange={() => setSell((prev) => !prev)}
          />
          <span className="checkmark"></span>
        </label>
        <label htmlFor="cross" className="label-radio">
          To cross
          <input
            className="used-type input-radio"
            type="radio"
            name="propouse"
            id="cross"
            onChange={() => setCross((prev) => !prev)}
          />
          <span className="checkmark"></span>
        </label>
      </div>
      <div className="toggle__container">
        <p>Do you accept our rules?</p>
        <label className="switch">
          <input
            className="toggle-button"
            type="checkbox"
            id="toggle-btn"
            defaultChecked={agree}
            onChange={() => setAgree((prev) => !prev)}
          />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="image_upload">
        <label htmlFor="file-loader" className="input-file">
          Add image
        </label>
        <input
          type="file"
          id="file-loader"
          onChange={(e) => loadFile(e)}
          required
        />
        <img id="image-preview" src="" alt="image preview" />
      </div>

      <div>
        <input
          type="submit"
          className="sumbit-btn"
          value="Add book"
          disabled={Object.keys(errors).length === 0 ? false : true}
        />
      </div>
    </form>
  );
};

export default AddForm;
