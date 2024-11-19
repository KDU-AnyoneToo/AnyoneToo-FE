import React from "react";
import * as C from "../../styles/CommonStyle";
import * as SE from "../../styles/Education/SearchEStyle";

function SearchE() {
  return (
    <C.Page>
      <C.Center>
        <C.PageSpace>
          <SE.Search>
            <SE.SearchTitle></SE.SearchTitle>
            <SE.SearchContent>
              <SE.SearchItem>
                <SE.SearchText></SE.SearchText>
                <SE.SearchDelete></SE.SearchDelete>
              </SE.SearchItem>
            </SE.SearchContent>
          </SE.Search>
        </C.PageSpace>
      </C.Center>
    </C.Page>
  );
}

export default SearchE;
