import React from 'react'


export default class RankTitle extends React.Component {


    state = {
        isLoading: false,
        t: [],
    }


      async componentDidMount(){

        this.setState({ 
          isLoading: true
        })


        try {
          const res = await fetch('http://ranq.xyz/api/rank_title/' + this.props.rank_id)
          const t = await res.json();
            this.setState({
                t
            });
  
        } catch (e) {
          console.log(e);
        }


        this.setState({ isLoading: false })
  
  }




    render() {
            return (
                <section className="rank-title">
                    <p>Contest Title: {this.state.t.title}</p>
                </section>
            )
    }
}

