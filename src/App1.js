import React from "react";
import "./styles.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./App.css";

const list = [
  {
    name: "Person 1",
    id: 11,
    hidden: true,
    src1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFO_iqANHzsY2clreCvjXXj9DkWhG44byc_w&usqp=CAU",
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSKm_0srduGpb0_jCbGYsvYz7UYdlZPL-eYg&usqp=CAU"
  },
  {
    name: "Person 2",
    id: 12,
    hidden: true,
    src1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFO_iqANHzsY2clreCvjXXj9DkWhG44byc_w&usqp=CAU",
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSKm_0srduGpb0_jCbGYsvYz7UYdlZPL-eYg&usqp=CAU"
  },
  {
    name: "Person 3",
    id: 23,
    hidden: true,
    src1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFO_iqANHzsY2clreCvjXXj9DkWhG44byc_w&usqp=CAU",
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSKm_0srduGpb0_jCbGYsvYz7UYdlZPL-eYg&usqp=CAU"
  },
  {
    name: "Person 4",
    id: 34,
    hidden: true,
    src1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFO_iqANHzsY2clreCvjXXj9DkWhG44byc_w&usqp=CAU",
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSKm_0srduGpb0_jCbGYsvYz7UYdlZPL-eYg&usqp=CAU"
  },
  {
    name: "Person 5",
    id: 45,
    hidden: true,
    src1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFO_iqANHzsY2clreCvjXXj9DkWhG44byc_w&usqp=CAU",
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSKm_0srduGpb0_jCbGYsvYz7UYdlZPL-eYg&usqp=CAU"
  }
];


class App1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: list,
      selectedDate: new Date()
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    var longDate = new Date(this.state.selectedDate.toDateString()).getTime();
    this.setState({ selectedDate: longDate });
  }
  handleClick(item) {
    let updatedList = this.state.list.map((obj) => {
      if (obj.id === item.id) {
        return Object.assign({}, obj, {
          hidden: !item.hidden
        });
      }
      return obj;
    });
    this.setState({
      list: updatedList
    });
  }

  onChange = (date) => {
    this.state.selectedDate = date;
    this.setState(this.state);
  };

  dragWord(item) {
    this.setState({ dragImgName: item.name });
    this.setState({ dragImgSrc: item.src });
  }
  dropWord(event, item) {
    event.preventDefault();
    var tempDropImg = item.src;
    var tempDragImg = this.state.dragImgSrc;

    this.setState({ dropImgSrc: item.src });
    this.setState({
      list: this.state.list.map((el) =>
        el.src === tempDropImg
          ? Object.assign({}, el, { src: tempDragImg })
          : el
      )
    });

    this.setState({
      list: this.state.list.map((el) =>
        el.src === tempDragImg
          ? Object.assign({}, el, { src: tempDropImg })
          : el
      )
    });
  }

  render() {
   
    const { hidden } = this.state;
    return (
      <>
        {this.state.list.map((item) => {
          return (
            <div
              key={item.name}
              onDragOver={(event) => event.preventDefault()}
              name={`${item.name}`}
              onDrop={(event) => this.dropWord(event, item)}
            >
              <div className="row">
                <table>
                  <tbody>
                      <tr key={item.itemId}>
                        <td className="hiddenArrow" style={{ width: "5%" }}>
                          =
                        </td>
                        <td className="hiddenArrow" style={{ width: "5%" }}>
                          <input
                            type="radio"
                            hidden={item.hidden}
                            onChange={this.handleChange}
                          />
                        </td>

                        <td  
                          className={item.hidden ? "mover_boxA" : "mover_boxB"}
                            style={{ width: "40%" }}
                          
                        >
                          <div   
                            draggable="true"
                            onClick={() => this.handleClick(item)}
                            onDragStart={() => {
                              this.dragWord(item);
                            }}
                          >
                            {item.name}
                            <div onClick={() => this.handleClick(item.hidden)}>
                              {item.hidden ? (
                                <img fixed src={item.src} alt={item.name} />
                              ) : (
                                <img fixed src={item.src1} alt={item.name} />
                              )}
                            </div>
                            view builder
                          </div>
                        </td>

                        <td>
                          <p
                            hidden={item.hidden}
                            style={{ padding: "10px", marginLeft: "40%" }}
                          >
                            <DatePicker
                              className="picker"
                              id="date"
                              selected={this.state.selectedDate}
                              showTimeSelect
                              onChange={this.onChange}
                            ></DatePicker>
                          </p>
                        </td>
                      </tr>
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
export default App1;
