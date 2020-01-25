import React from 'react'

export default class RankTitle extends React.Component {


    state = {
        isLoading: false,
        title: [],
    }


      async componentDidMount(){

        this.setState({ 
          isLoading: true
        })


        try {
          const res = await fetch('http://ranq.xyz/api/private_rank_title/' + this.props.rank_id)
          const title = await res.json();
            this.setState({
                title
            });
  
        } catch (e) {
          console.log(e);
        }


        this.setState({ isLoading: false })
  
  }




      render() {
            return (
                <section className="rank-title">
                    <p>Contest Title: {this.state.title.name}</p>
                </section>
            )
        }
}

