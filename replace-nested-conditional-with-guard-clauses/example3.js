
function ConnectPeer2Peer(pA, pB, manager) {
    if (pA.isConnected()) {
        manager.Prepare(pA);
        if (pB.isConnected()) {
            manager.Prepare(pB);
            if (manager.ConnectTogther(pA, pB)) {
                pA.Write("connected");
                pB.Write("connected");
                return S_OK;
            } else {
                return S_ERROR;
            }

        } else {
            pA.Write("Peer is not Ready, waiting...");
            return S_RETRY;
        }
    } else {
        if (pB.isConnected()) {
            pB.Write("Peer is not Ready, waiting...");
            return S_RETRY;
        } else {
            pA.Close();
            pB.Close();
            return S_ERROR;
        }
    }
}
