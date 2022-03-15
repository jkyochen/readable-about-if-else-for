
function ConnectPeer2Peer(pA, pB, manager) {

    if (!pA.isConnected() || !pB.isConnected()) {
        pA.Close();
        pB.Close();
        return S_ERROR;
    }

    if (pA.isConnected() && !pB.isConnected()) {
        manager.Prepare(pA);
        pA.Write("Peer is not Ready, waiting...");
        return S_RETRY;
    }

    if (!pA.isConnected() && pB.isConnected()) {
        manager.Prepare(pB);
        pB.Write("Peer is not Ready, waiting...");
        return S_RETRY;
    }

    if (!manager.ConnectTogther(pA, pB)) {
        return S_ERROR;
    }

    pA.Write("connected");
    pB.Write("connected");
    return S_OK;
}
